import { CardsGrid, SkeletonCard } from "../_components/index";

const Loading = () => (
  <CardsGrid>
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
    <SkeletonCard />
  </CardsGrid>
);

export default Loading;
