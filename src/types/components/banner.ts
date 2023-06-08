import { ProductListDTO } from "../product.dto";

type Item = ProductListDTO & {
  description: string;
};

export interface BannerProps {
  items: ProductListDTO[] | null;
}

export interface CarouselItemProps {
  item: Item;
  index: number;
}
