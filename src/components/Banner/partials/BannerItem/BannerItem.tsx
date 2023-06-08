import { CarouselItemProps } from "../../../../types";
import * as S from "./styles";

export const BannerItem = ({ item, index }: CarouselItemProps) => (
  <S.BannerItemWrapper key={index}>
    <S.BannerItemImage source={{ uri: item.thumbnail }} />
    <S.BannerItemDescription>
      <S.BannerItemText>{item.description}</S.BannerItemText>
    </S.BannerItemDescription>
  </S.BannerItemWrapper>
);
