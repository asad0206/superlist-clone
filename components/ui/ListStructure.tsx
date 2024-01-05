import { listData } from "./listdata";
import ListView from "./ListView";

interface HomeProps {}

const ListStructure: React.FC<HomeProps> = () => {
  return (
    <div className="w-screen w-full bg-[#181824] p-24">
      <p
        className="font-bold text-[40px] leading-none px-24"
        style={{ color: "#dedeeb" }}
      >
        Everything <br />
        <span className="text-[#f84f39]">a team needs</span>
      </p>
      <div>
        {listData.map((listData, i) => (
          <ListView key={`p_${i}`} {...listData} i={i} />
        ))}
      </div>

      <p
        className="font-bold text-[20px] leading-none px-24"
        style={{ color: "#dedeeb" }}
      >
        The list goes on....
      </p>
    </div>
  );
};

export default ListStructure;
