// Style
import * as S from "./styles";

// Types
import { ProductListDTO } from "../../../../types";

type Item = ProductListDTO & {
  description: string;
};

interface CarouselItemProps {
  item: Item;
  index: number;
}

export const BannerItem = ({ item, index }: CarouselItemProps) => (
  <S.BannerItemWrapper key={index}>
    <S.BannerItemImage source={{ uri: item.thumbnail }} />
    <S.BannerItemDescription>
      <S.BannerItemText>{item.description}</S.BannerItemText>
    </S.BannerItemDescription>
  </S.BannerItemWrapper>
);
