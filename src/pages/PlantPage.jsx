import { Leaf, Tag, Info, ArrowLeft } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router";
import PlantDetailSkeleton from "./../components/PlantDetailSkeleton";

export default function PlantDetail() {
  const [plant, setPlants] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const { id } = useParams();
  const fetchAllPlant = useCallback(async (id) => {
    setIsloading(true);
    try {
      const data = await fetch(
        `https://openapi.programming-hero.com/api/plant/${id}`,
      );
      const res = await data.json();
      const plants = res.plants;
      setTimeout(() => setPlants(plants), 0);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllPlant(id);
  }, [id, fetchAllPlant]);
  return (
    <>
      {isLoading ? (
        <PlantDetailSkeleton />
      ) : (
        <div
          className="min-h-screen"
          style={{
            backgroundColor: "#e8f5e9",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          {/* Navbar placeholder bar */}
          <div style={{ height: "52px" }} />

          {/* Back link */}
          <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#15803d" }}
            >
              <ArrowLeft size={16} />
              Back to Trees
            </Link>
          </div>

          {/* Main Card */}
          <div className="max-w-5xl mx-auto px-4 pb-16">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 24px rgba(21,128,61,0.10)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* ── Left: Image ── */}
                <div
                  className="relative flex items-center justify-center"
                  style={{ backgroundColor: "#d1fae5", minHeight: "340px" }}
                >
                  {/* Category badge */}
                  <span
                    className="absolute top-4 left-4 flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#15803d", color: "#fff" }}
                  >
                    <Leaf size={12} />
                    {plant.category}
                  </span>

                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="object-cover w-full h-full"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/600x400/d1fae5/15803d?text=🌿+Plant+Image";
                    }}
                  />
                </div>

                {/* ── Right: Details ── */}
                <div className="p-8 flex flex-col justify-between gap-6">
                  {/* Title */}
                  <div>
                    <h1
                      className="text-3xl font-bold leading-tight mb-2"
                      style={{ color: "#14532d" }}
                    >
                      {plant.name}
                    </h1>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-5">
                      <Tag size={16} style={{ color: "#15803d" }} />
                      <span
                        className="text-2xl font-extrabold"
                        style={{ color: "#15803d" }}
                      >
                        ৳{plant.price}
                      </span>
                      <span className="text-sm" style={{ color: "#6b7280" }}>
                        / tree
                      </span>
                    </div>

                    {/* Divider */}
                    <div
                      style={{ height: "1px", backgroundColor: "#d1fae5" }}
                      className="mb-5"
                    />

                    {/* Description */}
                    <div className="flex gap-3">
                      <Info
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{ color: "#15803d" }}
                      />
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#374151" }}
                      >
                        {plant.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra info strip */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { icon: "🌱", label: "Eco Friendly" },
                { icon: "🚚", label: "Free Delivery" },
                { icon: "💧", label: "Care Guide Included" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl py-4 text-sm font-semibold"
                  style={{
                    backgroundColor: "#fff",
                    color: "#15803d",
                    boxShadow: "0 2px 8px rgba(21,128,61,0.08)",
                  }}
                >
                  <div className="text-xl mb-1">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
