import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const response = await fetch(URL + "/" + id);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch billboards: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch billboards:", error);
    throw error;
  }
};

export default getBillboard;
