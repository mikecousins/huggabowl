import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Huggabowl" },
    { name: "description", content: "Welcome to Huggabowl!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Huggabowl</h1>
      <p>Our website is coming soon.</p>
      <i>@2024 Huggabowl Food Outreach Ltd.</i>
    </div>
  );
}
