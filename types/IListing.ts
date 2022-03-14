interface IListing {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  userId: number;
  members: number[];
}

export default IListing;
