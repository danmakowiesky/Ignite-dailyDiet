export type IsInDietTypeProps = boolean | undefined;

export type MealTypeProps = {
    title: string;
    meal: string;
    hour: string;
    isInDiet: IsInDietTypeProps;
}

export type MealListTypeProps = {
    date: string;
    data: MealTypeProps[];
};