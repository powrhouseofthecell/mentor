import { LANGUAGE_VERSIONS } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }: any) => {
  return (
    <div className="my-6">
      <Select
        onValueChange={(value) => {
          onSelect(value);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="JavaScript" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {languages.map(([lang, _version], idx) => {
              <SelectLabel>Lanugages</SelectLabel>;
              return (
                <SelectItem key={idx} value={lang}>
                  {lang}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default LanguageSelector;
