
export interface Category {
  image: React.ReactNode,
  name: string
}

export interface ListViewProps {
  data: Category[] | null;
  selectedCategory: Category | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category | null>>;
}

export interface ItemData {
  image: string
  title: string
  description: string
  drinks?: string[]
  sizes?: Size[]
  price: number
  category: string
}

export interface GridViewProps {
  data: ItemData[]
  selectedCategory: Category | null
}

export interface ItemProps {
  item?: ItemData
  handleClose: () => void
}

export interface Size {
  size: string;
  price: number;
};


export interface SizesProps {
  sizes?: Size[];
};