
"use client"
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useState } from "react"; // Import the useState hook

export const SearchForm = () => {
	const router = useRouter();
  // Use the state hook to manage the input value
  const [searchValue, setSearchValue] = useState<string | null>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the state with the new input value
		const query = { search: e.target.value };
		const url = qs.stringifyUrl(
			{
				url: window.location.href,
				query,
			},
			{
				skipNull: true,
			}
		);
		router.push(url);
    setSearchValue(e.target.value);
  };

  return (
    <Input
      placeholder="Rechercher"
      onChange={handleChange}
      value={searchValue || ""} // Use the state value for the input value
    />
  );
};
