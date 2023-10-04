"use client";

import { useState } from "react";
import Image from "next/image";
import "./styles.css";

export default function Page() {
  type Category = {
    name: string;
    selected: boolean;
    id: number;
    image: string;
    color: string;
  };
  type Categories = Category[];

  const selectCategory = (category: Category) => {
    console.log(category);
    // if category is already selected, unselect it
    if (category.selected) {
      category.selected = false;
      // remove category from selected categories
      setSelectedCategories(
        selectedCategories.filter((c) => c.id !== category.id)
      );
    } else {
      // if category is not selected, select it
      category.selected = true;
      // add category to selected categories
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const [categories, setCategories] = useState<Categories>([
    {
      name: "Action",
      selected: false,
      id: 1,
      image: "/categories/action.png",
      color: "#FF5209",
    },
    {
      name: "Drama",
      selected: false,
      id: 2,
      image: "/categories/drama.png",
      color: "#D7A4FF",
    },
    {
      name: "Thriller",
      selected: false,
      id: 3,
      image: "/categories/thriller.png",
      color: "#148A08",
    },
    {
      name: "Western",
      selected: false,
      id: 4,
      image: "/categories/western.png",
      color: "#84C2FF",
    },
    {
      name: "Horror",
      selected: false,
      id: 5,
      image: "/categories/horror.png",
      color: "#902500",
    },
    {
      name: "Fantasy",
      selected: false,
      id: 6,
      image: "/categories/fantasy.png",
      color: "#7358FF",
    },
    {
      name: "Music",
      selected: false,
      id: 7,
      image: "/categories/music.png",
      color: "#FF4ADE",
    },
    {
      name: "Fiction",
      selected: false,
      id: 8,
      image: "/categories/fiction.png",
      color: "#E61E32",
    },
    {
      name: "Romance",
      selected: false,
      id: 9,
      image: "/categories/romance.png",
      color: "#6CD061",
    },
  ]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  return (
    <div className="onboard-page">
      <div className="onboard-left">
        <h2 className="onboard-title">Super app</h2>
        <div className="onboard-subtitle">
          Choose your entertainment category
        </div>
        <div className="onboard-categories">
          {selectedCategories.map((category) => (
            <div className="selected-categories-tooltip" key={category.id}>
              <div className="selected-tooltip-text">{category.name}</div>
              <div
                className="selected-tooltip-close"
                onClick={() => selectCategory(category)}
              >
                x
              </div>
            </div>
          ))}
        </div>
        {selectedCategories.length < 3 && (
          <div className="onboard-warning">
            <Image
              src="/warn.png"
              width={20}
              height={20}
              className="warn-img"
              alt="warning icon"
            />
            <span className="onboard-warning-text">
              Minimum 3 categories required
            </span>
          </div>
        )}
      </div>
      <div className="onboard-right">
        <div className="onboard-tiles">
          {categories.map((category) => (
            <div
              className="onboard-category"
              key={category.id}
              style={{
                backgroundColor: category.color,
                border: category.selected ? "6px solid #11B800" : "none",
                opacity: category.selected ? 0.5 : 1,
              }}
              onClick={() => selectCategory(category)}
            >
              <div className="onboard-category-title">{category.name}</div>
              <Image
                className="category-img"
                width={150}
                height={150}
                src={category.image}
                alt={category.name}
              />
            </div>
          ))}
        </div>
        <div className="onboard-footer">
          <button type="button" className="onboard-btn">
            Next page
          </button>
        </div>
      </div>
    </div>
  );
}
