import { Stack } from "@/shared/ui/Stack/Stack";
import { subscribeToResize, getWidth } from "@/shared/lib/getResize";
import { SortControl } from "@/features/Sort/ui/SortControl/SortControl";
import { CategoryControl } from "@/features/CategoryControl/ui/CategoryControl";
import { CategoryItems } from "../../../CategoryItems/ui/CategoryItems/CategoryItems";
import { getCategory, subscribe, unsubscribe } from "@/features/CategoryFilter/lib/categoryStore";
import { filterProductsByCategory } from "@/features/CategoryFilter/lib/filterProductsByCategory";
import { getSortedProducts } from "@/features/Sort/lib/getSortedProducts";
import { CategoryHeader } from "../../../CategoryHeader/ui/CategoryHeader/CategoryHeader";
import { fetchProducts } from "@/entities/ProductCard/api/api";

export async function CategoryContent() {
  const content = Stack({ direction: "column", gap: 44 });

  let currentSort = "СНАЧАЛА ДОРОГИЕ";
  let currentProducts = [];

  const category = CategoryControl();
  const sort = SortControl({
    onChange: (newSort) => {
      currentSort = newSort;
      rerender();
    },
  });

  const productWrapper = Stack({ children: [] });
  let productsHeader = Stack({ children: [] });

  content.appendChild(category.overlay);
  content.appendChild(sort.element);
  content.appendChild(productsHeader);
  content.appendChild(productWrapper);

  let allProducts = await fetchProducts();

  function rerender() {
    const selectedCategory = getCategory();
    const filtered = filterProductsByCategory(allProducts, selectedCategory);
    currentProducts = getSortedProducts(filtered, currentSort);

    productWrapper.innerHTML = "";
    productWrapper.appendChild(CategoryItems({ items: currentProducts }));

    const newHeader = CategoryHeader({
      width: getWidth(),
      itemCount: currentProducts.length,
      categoryElement: category.element,
      sortElement: sort.element,
    });

    productsHeader.replaceWith(newHeader);
    productsHeader = newHeader;
  }

  const onResize = () => {
    const newHeader = CategoryHeader({
      width: getWidth(),
      itemCount: currentProducts.length,
      categoryElement: category.element,
      sortElement: sort.element,
    });

    productsHeader.replaceWith(newHeader);
    productsHeader = newHeader;
  };

  subscribe(rerender);
  subscribeToResize(onResize);

  content.destroy = () => {
    unsubscribe(rerender);
  };

  rerender();

  return content;
}
