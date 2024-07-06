import React from "react";
import { Link } from "react-router-dom";

// Blog Posts Details 
export const blogPosts = [
    {
        id: 1,
        title: "AgrowGrad: Revolutionizing Agricultural Education in India",
        image: "https://i.ibb.co/HqTZ22h/pllll.jpg",
        content: `
        <div className="bg-white text-gray-900 p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        
        <p className="text-lg mb-4">In the heart of India, where agriculture isn't just a profession but a way of life, a new dawn is breaking. AgrowGrad emerges as a beacon of hope, bridging the critical gap in agricultural education.</p>
        <p className="text-lg mb-0">As urbanization sweeps across the nation, we're faced with a generation eager to reconnect with their roots but lacking the practical knowledge to do so. This is where AgrowGrad steps in, ready to transform agricultural learning and empower a new wave of innovative farmers.</p>

        <h2 className="text-3xl font-semibold mt-4 mb-4">The AgrowGrad Vision</h2>
        <p className="text-lg mb-4">Imagine an India where every individual, regardless of their background, can cultivate their own food sustainably. AgrowGrad is turning this vision into reality by:</p>

        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">Democratizing Agricultural Knowledge: Making expert farming insights accessible to all.</li>
          <li className="mb-2">Blending Tradition with Innovation: Honoring age-old wisdom while embracing cutting-edge techniques.</li>
          <li>Aiming to equip over 100,000 Indians with sustainable farming skills by 2030.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Unique Offerings</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Interactive Learning Experiences</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Engaging webinars led by industry experts</li>
            <li className="mb-2">Hands-on practical sessions for real-world application</li>
            <li>Virtual mentorship programs connecting seasoned farmers with eager learners</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Sustainability at the Core</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Comprehensive courses on organic farming practices</li>
            <li className="mb-2">Resource management techniques for optimal yield</li>
            <li>Cutting-edge methodologies promoting long-term environmental stewardship</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Building a Thriving Agri-Community</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Networking events for knowledge exchange</li>
            <li className="mb-2">Collaborative projects encouraging innovation</li>
            <li>Support groups for new farmers facing common challenges</li>
          </ul>
        </div>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Why AgrowGrad Stands Out</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">Innovative Curriculum: Our courses strike the perfect balance between traditional wisdom and modern agricultural science.</li>
          <li className="mb-2">Accessibility: With our robust online platform, quality agricultural education is just a click away.</li>
          <li>Empowerment: We don't just teach; we inspire. AgrowGrad equips you with the tools to take control of your food production and contribute to India's food security.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Join the AgrowGrad Revolution</h2>
        <p className="text-lg mb-4">AgrowGrad is more than an educational platform; it's a movement towards a sustainable, self-sufficient India. By joining us, you're not just learning about agriculture – you're becoming part of a community dedicated to nurturing the earth and feeding the nation.</p>

        <strong>Remember:</strong> At AgrowGrad, we don't just grow crops; we grow futures.</p>
        </div>
      </div>
    </div>
        `
    },

    {
        id: 2,
        title: "Step by Step Guide on How to Start Farming.",
        image: "https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content: `
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-lg prose-green max-w-none">
        <p className="mb-4">Starting your own farm is a dream that many people share—a vision of living closer to nature, growing your own food, and creating a sustainable and fulfilling way of life. Whether you're imagining rows of vibrant vegetables, an orchard brimming with fruit, or pastures filled with contented livestock, the journey to becoming a farmer is filled with both challenges and rewards.</p>

        <p className="mb-4">For beginners, the path to successful farming can seem daunting. But don't worry—every seasoned farmer was once a beginner, too. This guide is here to help you navigate the process, breaking it down into manageable steps that will lead you from the initial planning stages to harvesting your first crops.</p>

        <p className="mb-4">Farming is more than just a series of tasks; it's about developing a relationship with the land, understanding the rhythms of nature, and cultivating patience and perseverance. By following this step-by-step guide, you'll gain the knowledge and confidence you need to make informed decisions and nurture your farm's growth.</p>

        <p className="mb-6">Join us as we explore the journey of starting a farm, offering practical advice, encouragement, and a touch of inspiration to help you turn your dream into a thriving reality. Let's get started and embark on this rewarding adventure together.</p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">What to Consider:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2"><strong>Vision and Values:</strong> A farm is both an extension of the vision and values of the individual(s) who start(s) it, and it has to be carefully planned to make sure that it fits within that vision as well as within the particular confines of the place where it is established.</li>
          <li className="mb-2"><strong>Place Matters:</strong> Direct market farms typically aren't well suited for the rural heartland. These are extreme examples, but there are important subtleties to every market and every plot of land.</li>
          <li className="mb-2"><strong>Planning:</strong> New farms need to have a well designed business plan that takes into consideration individual infrastructure and financial needs, the viability of marketing strategies, and the farmer's production capacity and knowledge.</li>
          <li className="mb-2"><strong>Education and Experience:</strong> Preparation, knowledge, and training are essential. But so is being able adapt quickly to the unexpected, to persevere when factors beyond one's control conspire against you, and knowing how/when/what/where to expend time, energy, and resources.</li>
          <li className="mb-2"><strong>Managing risk:</strong> It is helpful to plan careful to manage risk through diversification, financial management, and the ability to withstand a couple of bad years.</li>
          <li className="mb-2"><strong>Start small:</strong> For most beginning farmers, we advise starting small to allow time for details to be worked out, for additional learning to occur, and to mitigate the size and scope of problems that will inevitably arise.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Let's start with testing your soil:</h2>
        <p className="mb-4">Soil testing is a crucial step in preparing your land for crop farming. It helps determine the soil's nutrient levels, pH, and overall health, enabling you to make informed decisions about amendments and crop choices. Here's a step-by-step guide on how to conduct soil testing:</p>

        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-4">
            <strong>Gather Materials:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Soil sampling tools (soil probe, auger, or spade)</li>
              <li>Clean plastic bucket</li>
              <li>Plastic bags or soil sample containers</li>
              <li>Marker for labeling samples</li>
              <li>Soil test kit or access to a soil testing laboratory</li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Plan Your Sampling Strategy:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Divide your land into different sampling areas based on soil type, past management practices, and crop history.</li>
              <li>Avoid unusual spots such as areas near trees, compost piles, or animal feeding areas.</li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Collect Soil Samples:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Depth: For most crops, collect samples from the top 6-8 inches of soil. For perennial crops or deep-rooted plants, you may need samples from deeper layers (up to 12 inches).</li>
              <li>Number of Samples: Take 10-15 samples per area to get a representative soil profile. Combine these subsamples into one composite sample for each area.</li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Sampling Process:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Remove surface debris (grass, leaves, rocks).</li>
              <li>Insert the soil probe or auger into the soil to the desired depth.</li>
              <li>Pull out the soil and place it into the plastic bucket.</li>
              <li>Repeat this process for the designated number of samples within the same area.</li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Prepare Composite Samples:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Mix the collected soil samples thoroughly in the bucket.</li>
              <li>Remove any stones, roots, or debris.</li>
              <li>Place about 1-2 cups of the mixed soil into a labeled plastic bag or sample container. Label it with the area name, date, and any other relevant information.</li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Submit Samples for Testing:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>If using a soil testing laboratory:
                <ul className="list-disc pl-6 mt-2">
                  <li>Follow the lab's specific instructions for sample submission.</li>
                  <li>Fill out any required forms, detailing the crops you plan to grow and any previous soil treatments.</li>
                </ul>
              </li>
              <li>If using a home soil test kit:
                <ul className="list-disc pl-6 mt-2">
                  <li>Follow the kit instructions for testing pH, nutrient levels (N, P, K), and other parameters.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Interpret Test Results:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Soil pH: Indicates the acidity or alkalinity of your soil. Most crops prefer a pH between 6.0 and 7.0.</li>
              <li>Nutrient Levels: Look for levels of nitrogen (N), phosphorus (P), potassium (K), and other micronutrients.</li>
              <li>Organic Matter: High levels indicate good soil health and fertility.</li>
              <li>Soil Texture: The proportion of sand, silt, and clay affects water retention and drainage.</li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Recommendations and Amendments:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Based on the test results, make necessary amendments:
                <ul className="list-disc pl-6 mt-2">
                  <li>pH Adjustment: Add lime to raise pH (for acidic soils) or sulfur to lower pH (for alkaline soils).</li>
                  <li>Nutrient Deficiency: Apply fertilizers or organic amendments to address specific nutrient shortages.</li>
                  <li>Organic Matter: Incorporate compost, manure, or cover crops to improve soil structure and fertility.</li>
                  <li>Soil Structure: Use practices like crop rotation and cover cropping to enhance soil health.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Implement Amendments:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Apply the recommended amendments evenly across the field.</li>
              <li>Incorporate them into the soil using tillage or other suitable methods.</li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Follow-Up Testing:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Repeat soil testing periodically (every 2-3 years) to monitor changes in soil health and adjust your management practices accordingly.</li>
            </ul>
          </li>
        </ol>

        <p className="mb-6">By following these steps, you can ensure that your soil is well-prepared for growing healthy and productive crops.</p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Now let's move on to soil quality identification:</h2>
        <p className="mb-4">Soil quality is assessed by evaluating different indicators, which can be physical, chemical, or biological. A combination of these properties provides a more holistic evaluation of soil quality than analyzing individual parameters.</p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Physical indicators:</strong> Bulk density, infiltration, soil structure, water holding capacity, and depth</li>
          <li><strong>Chemical indicators:</strong> pH, electrical conductivity, nitrate-nitrogen, and phosphorus-phosphates</li>
          <li><strong>Biological indicators:</strong> Stability of soil aggregates and microbial activity</li>
        </ul>
        <p className="mb-4">The most frequently used process for assessing soil quality is calculating a Soil Quality Index (SQI) by applying scoring algorithms to soil indicator properties.</p>
        <p className="mb-4">Some simple ways to assess soil quality include:</p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Slake test:</strong> Measures the stability of soil aggregates and how well it can withstand external factors.</li>
          <li><strong>Penetrometer:</strong> Measures soil strength.</li>
          <li><strong>Root development:</strong> Checking the extent of root development, searching for fine strands with a white healthy appearance.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Now let's jump into choosing crops:</h2>
        <p className="mb-4">Soil quality is a key factor in choosing crops, as the soil's texture, pH, fertility, and organic matter content determine which crops are best suited to it. Other factors to consider include climate and water availability.</p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Soil texture:</strong> The percentage of sand, silt, and clay determines the soil's texture. Loamy soil is ideal for many crops, while sandy soil drains quickly and clay soil drains poorly.</li>
          <li><strong>Soil pH:</strong> Clay soil is often alkaline, which can prevent plants from getting enough nutrients.</li>
          <li><strong>Soil fertility:</strong> Laterite soil is low in nutrients.</li>
        </ul>
        <p className="mb-4">In addition to soil quality, you can also consider:</p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>Resources:</strong> How much time, labor, and space you have</li>
          <li><strong>Profitability:</strong> Some crops are more profitable than others</li>
          <li><strong>Seasonality:</strong> Some crops grow all season, while others provide multiple harvests</li>
          <li><strong>Time in the ground:</strong> How long the crop will take to grow is important if you have limited space</li>
          <li><strong>Past experiences:</strong> Consider your own experience and the experiences of others with the crop</li>
          <li><strong>Complementary needs:</strong> When choosing multiple crops, consider if their nutrient and mineral requirements differ</li>
        </ul>

        <p className="mt-8 mb-4">Thank you for taking the time to read our beginner's guide to starting a farm. We hope you found the step-by-step instructions helpful and inspiring. Farming can be a rewarding and fulfilling endeavor, offering a unique connection to the land and a sense of accomplishment. Remember, every successful farm started with a single step, so don't be afraid to get your hands dirty and learn as you go. If you have any questions or need further advice, feel free to reach out to us on whatsapp community. Happy farming!</p>
      </div>
    </div>
    `
    }
];


const BlogCard = ({ post }) => (
  <Link to={`/blog/${post.id}`}  >
    <div className="bg-green-50 hover:bg-emerald-100 cursor-pointer p-2 h-96 my-auto mx-auto rounded-lg shadow-md overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full rounded-lg h-72 object-cover" />
        <div className="p-1">
            <h3 className="text-xl font-semibold text-green-800 ">{post.title}</h3>
            <Link to={`/blog/${post.id}`} className="text-green-600 text-lg hover:text-green-800 font-medium">
                READ
            </Link>
        </div>
    </div>
  </Link>
);

const BlogSection = () => (
    <section className="py-2 h-auto  bg-green-">
        <div className="container px-4">
            <h2 className="text-5xl font-bold text-green-500 mt-4 mb-4">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    </section>
);

export default BlogSection;