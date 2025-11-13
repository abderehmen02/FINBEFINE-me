// data config
const thirdSectionImages = [
  "/home/man-and-text.png",
  "/home/womans-and-text.png",
  "/home/percentages.png",
];

export const ThirdSection = () => {
  return (
    <div className="flex gap-6 px-2 flex-wrap ">
      {thirdSectionImages.map((img) => (
        <img
          src={img}
          className=" w-full lg:w-[451px] lightShadow object-cover object-center rounded-[10px] h-[280px]"
        />
      ))}
    </div>
  );
};
