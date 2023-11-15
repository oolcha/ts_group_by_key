type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const keyItem = String(item[key]);

    if (!acc[keyItem]) {
      acc[keyItem] = [];
    }

    acc[keyItem].push(item);

    return acc;
  }, {});
}
