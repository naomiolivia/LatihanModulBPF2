// import frameworkData from "./framework.json";
import { useState } from "react";
import frameworkData from "./produk.json";

export default function FrameworkList() {
    const [searchTerm, setSearchTerm] = useState("");
	const [selectedTag, setSelectedTag] = useState("");

    const _searchTerm = searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
      const matchesSearch =
        framework.title
                  .toLowerCase()
                  .includes(_searchTerm) ||
        framework.description
                  .toLowerCase()
                  .includes(_searchTerm);
  
      const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;
  
      return matchesSearch && matchesTag;
    });

    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

  return (
    <div className="p-8">
            <input
            type="text"
            name="searchTerm"
            placeholder="Search framework..."
            className="w-full p-2 border border-pink-300 rounded mb-4"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            name="selectedTag"
            className="w-full p-2 border border-pink-300 rounded mb-4"
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
                <option key={index} value={tag}>
                {tag}
            </option>
            ))}
          </select>
        
          
        {filteredFrameworks.map((item) => (
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-5 mb-4 rounded-lg shadow-md bg-blue-200"
        >
          <h2 className="text-lg font-bold text-blue-700">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600">Category: {item.category}</p>
          <p className="text-red-600 font-bold">Price: ${item.price.toFixed(2)}</p>
          <p className="text-gray-600">Discount: {item.discountPercentage}%</p>
          <p className="text-gray-600">Rating: {item.rating}</p>
          <p className="text-gray-600">Stock: {item.stock}</p>
          <p className="text-gray-600">Brand: {item.brand}</p>
          <p className="text-gray-600">
            Dimensions: {`W: ${item.dimensions.width}cm, H: ${item.dimensions.height}cm, D: ${item.dimensions.depth}cm`}
          </p>
          <div className="mt-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    ))}
    </div>
  );
}
