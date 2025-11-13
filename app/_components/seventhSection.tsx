const sectionImages = ["/home/man-newspaper.png", "/home/woman-text.png"];

export const SeventhSection = () => {
  return (
    <div className="flex flex-col lg:flex-row py-12  max-w-full relative w-full gap-3">
      {sectionImages.map((img) => (
        <img
          src={img}
          className="w-full lg:w-[694px] lg:h-[220px] rounded-[10px] "
        />
      ))}
    </div>
  );
};
