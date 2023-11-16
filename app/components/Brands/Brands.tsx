import useFetch from "@/lib/getData";
import Brand from "../Brand";
type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const Brands = async (props: Props) => {
  const searchParams = props.searchParams;
  const gclid = searchParams && searchParams["gclid"];
  const { data }: any = await useFetch(gclid);

  return (
    <div className="mx-auto w-full max-w-screen-xl">
      {data?.map((item: any) => {
        return (
          <>
            <Brand key={item.id} item={item} />
          </>
        );
      })}
    </div>
  );
};

export default Brands;
