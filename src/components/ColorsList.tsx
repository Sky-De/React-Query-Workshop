import { Color } from "../hooks/usePaginatedColors";

const ColorsList = ({ data }: { data: Color[] | undefined }) => {
  return (
    <ul>
      {data && data.map((color) => <li key={color.id}>{color.label}</li>)}
    </ul>
  );
};

export default ColorsList;
