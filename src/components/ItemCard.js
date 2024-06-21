import { formatter } from "../utils/helper";
import "../App.css";

export default function ItemCard({ data }) {
  return (
    <div className="bg-white m-6 w-full text-sm">
      <div className="image-product justify-center pb-4">
        <img
          src={"./images/" + data.image_link}
          alt="item"
          className="max-h-[160px] max-w-[160px]"
          width={160}
          height={160}
        />
      </div>
      <p className="mb-4 text-black">{data.item_name}</p>
      <p className="text-[#f57224] font-bold text-lg">
        Rp. {formatter(data.price)}
      </p>
      <p className="text-black opacity-50">{data.company}</p>
      <div className="flex">
        <img width={24} height={24} src="./images/asset 7.png" />
        <p className="ml-1 text-black">{data.country}</p>
      </div>
      <p className="text-blue-500 w-full max-w-[120px]">
        Status Pajak : {data.tax_status}
      </p>
      <div className="flex">
        <p className="text-[#C25442]">{data.city}</p>
      </div>
    </div>
  );
}
