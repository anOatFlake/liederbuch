import AddToRepButton from "./buttons/addToRepButton";

const SongListElement: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div>
      <AddToRepButton id={id} />
    </div>
  );
};
export default SongListElement;
