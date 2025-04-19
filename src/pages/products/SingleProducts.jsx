import { useLoaderData } from "react-router-dom";
import React from "react";

const SingleProducts = () => {
  const item = useLoaderData();
  console.log("Loaded item:", item); // debug check

  if (!item) return <p>Loading product...</p>;

  const extractNumber = (timeString) => {
    if (!timeString || typeof timeString !== "string") return 0;
    const timeArray = timeString.split(" ");
    return parseInt(timeArray[0]) || 0;
  };

  const prepTimeMinutes = extractNumber(item?.more?.prep_time);
  const cookTimeMinutes = extractNumber(item?.more?.cook_time);
  const totalTime = prepTimeMinutes + cookTimeMinutes;

  const imageUrl =
    item.thumbnail ||
    item.thumbnail_image ||
    "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell px-4">
      <article className="max-w-4xl w-full">
        <div className="bg-white md:my-20 md:py-10 pb-8 md:rounded-xl shadow-sm">
          <picture>
            <img
              src={imageUrl}
              alt={item.name || "Product"}
              className="w-full md:h-[570px] object-cover md:rounded-xl"
            />
          </picture>

          <div className="px-6 md:px-10">
            <h1 className="text-4xl font-bold mt-10 text-secondary">
              {item.name || "Unnamed Product"}
            </h1>

            {item.description && (
              <p className="mt-6 text-gray-700 leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Prep Section */}
            {(item?.more?.prep_time || item?.more?.cook_time) && (
              <article className="bg-rose-50 mt-10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-rose-800">Preparation Time</h3>
                <ul className="mt-4 space-y-4 text-lg text-gray-800">
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-medium">Total:</span>
                    <span>{totalTime} minutes</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-medium">Preparation:</span>
                    <span>{item?.more?.prep_time || "N/A"}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Cooking:</span>
                    <span>{item?.more?.cook_time || "N/A"}</span>
                  </li>
                </ul>
              </article>
            )}

            {/* Ingredients Section */}
            {item?.ingredients?.length > 0 && (
              <article className="bg-yellow-50 mt-10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-yellow-800">Ingredients</h3>
                <ul className="mt-4 space-y-4 text-lg text-gray-800">
                  {item.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex justify-between border-b pb-2">
                      <span className="font-medium">{ingredient.name}</span>
                      <span>{ingredient.quantity}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            {/* ✅ Fixed Instructions Section */}
            {Array.isArray(item?.instructions) && item.instructions.length > 0 && (
              <article className="bg-blue-50 mt-10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-blue-800">Instructions</h3>
                <ol className="list-decimal mt-4 ml-6 space-y-3 text-gray-800 text-lg">
                  {item.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </article>
            )}

            {/* Nutritional Info Section */}
            {item?.nutrition && Object.keys(item.nutrition).length > 0 && (
              <article className="bg-green-50 mt-10 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold text-green-800">Nutritional Information</h3>
                <ul className="mt-4 space-y-2 text-lg text-gray-800">
                  {Object.entries(item.nutrition).map(([key, value], index) => (
                    <li key={index} className="flex justify-between border-b pb-2">
                      <span className="capitalize font-medium">{key.replace("_", " ")}:</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProducts;
