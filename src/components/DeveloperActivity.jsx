import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, BookOpen, Users, CheckCircle2, Flame, Layers } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";

const CACHE_KEY = "dev_activity_stats_v1";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

const INITIAL_STATS = {
  github: {
    avatarUrl: "https://avatars.githubusercontent.com/u/175795918?v=4",
    name: "Subrata Bag",
    username: "subrata-code",
    publicRepos: 50,
    followers: 5,
    following: 6,
    bio: "Final-Year CSE Student | Full-Stack & 3D Web Developer",
    profileUrl: "https://github.com/subrata-code"
  },
  leetcode: {
    username: "subrata2005",
    totalSolved: 70,
    easySolved: 43,
    totalEasy: 962,
    mediumSolved: 20,
    totalMedium: 2109,
    hardSolved: 7,
    totalHard: 971,
    ranking: 2154599,
    profileUrl: "https://leetcode.com/u/subrata2005/"
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function DeveloperActivity() {
  const [stats, setStats] = useState(INITIAL_STATS);

  useEffect(() => {
    let isMounted = true;

    async function loadActivityStats() {
      // Check cache first
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL && data) {
            if (isMounted) {
              setStats(data);
            }
            return;
          }
        }
      } catch (e) {
        console.warn("Cache read failed, fetching fresh data", e);
      }

      let updatedStats = { ...INITIAL_STATS };

      // Fetch GitHub data
      try {
        const ghRes = await fetch("https://api.github.com/users/subrata-code");
        if (ghRes.ok) {
          const ghData = await ghRes.json();
          updatedStats.github = {
            avatarUrl: ghData.avatar_url || INITIAL_STATS.github.avatarUrl,
            name: ghData.name || "Subrata Bag",
            username: ghData.login || "subrata-code",
            publicRepos: ghData.public_repos ?? 50,
            followers: ghData.followers ?? 5,
            following: ghData.following ?? 6,
            bio: ghData.bio || INITIAL_STATS.github.bio,
            profileUrl: "https://github.com/subrata-code"
          };
        }
      } catch (err) {
        console.warn("Failed to fetch GitHub live stats, using fallback", err);
      }

      // Fetch LeetCode data
      try {
        const lcRes = await fetch("https://leetcode-api-faisalshohag.vercel.app/subrata2005");
        if (lcRes.ok) {
          const lcData = await lcRes.json();
          if (lcData && typeof lcData.totalSolved === "number") {
            updatedStats.leetcode = {
              username: "subrata2005",
              totalSolved: lcData.totalSolved || 70,
              easySolved: lcData.easySolved || 43,
              totalEasy: lcData.totalEasy || 962,
              mediumSolved: lcData.mediumSolved || 20,
              totalMedium: lcData.totalMedium || 2109,
              hardSolved: lcData.hardSolved || 7,
              totalHard: lcData.totalHard || 971,
              ranking: lcData.ranking || 2154599,
              profileUrl: "https://leetcode.com/u/subrata2005/"
            };
          }
        }
      } catch (err) {
        console.warn("Failed to fetch LeetCode live stats, using fallback", err);
      }

      if (isMounted) {
        setStats(updatedStats);
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: updatedStats }));
        } catch (e) {
          // ignore quota error
        }
      }
    }

    loadActivityStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const { github, leetcode } = stats;

  const easyPercentage = Math.round((leetcode.easySolved / (leetcode.totalSolved || 1)) * 100);
  const mediumPercentage = Math.round((leetcode.mediumSolved / (leetcode.totalSolved || 1)) * 100);
  const hardPercentage = Math.round((leetcode.hardSolved / (leetcode.totalSolved || 1)) * 100);

  return (
    <section id="activity" className="py-16 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 drop-shadow-sm">
            Developer Activity & Coding Profiles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Real-time open-source contribution metrics from GitHub and problem-solving analytics from LeetCode.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* GitHub Insights Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={github.avatarUrl}
                      alt={github.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-900 shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-gray-900 text-white p-1 rounded-full text-xs">
                      <SiGithub className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      {github.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-500">@{github.username}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Developer
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                  <div className="flex justify-center mb-1 text-gray-700">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{github.publicRepos}</div>
                  <div className="text-xs font-medium text-gray-500 mt-0.5">Repositories</div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                  <div className="flex justify-center mb-1 text-gray-700">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{github.followers}</div>
                  <div className="text-xs font-medium text-gray-500 mt-0.5">Followers</div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                  <div className="flex justify-center mb-1 text-gray-700">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{github.following}</div>
                  <div className="text-xs font-medium text-gray-500 mt-0.5">Following</div>
                </div>
              </div>

              {/* Contribution Activity Graph */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-3">
                  <span className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-500" />
                    GitHub Contribution Activity
                  </span>
                  <span className="text-xs text-gray-500">subrata-code</span>
                </div>
                <div className="bg-gray-900 p-4 rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center">
                  <img
                    src={`https://ghchart.rshah.org/2563eb/${github.username}`}
                    alt="Subrata Bag GitHub Contribution Chart"
                    className="w-full h-auto max-h-32 object-contain filter invert-0 drop-shadow"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="mt-2 w-full flex justify-between text-[11px] text-gray-400 font-mono">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Link Button */}
            <div className="pt-4 border-t border-gray-100">
              <a
                href={github.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <SiGithub className="w-5 h-5" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>
            </div>
          </motion.div>

          {/* LeetCode Insights Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-amber-50 border-2 border-amber-500 flex items-center justify-center shadow-sm">
                    <SiLeetcode className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      LeetCode Stats
                    </h3>
                    <p className="text-sm font-medium text-gray-500">@{leetcode.username}</p>
                  </div>
                </div>
                {leetcode.ranking > 0 && (
                  <span className="px-3 py-1 bg-amber-50 text-amber-800 text-xs font-semibold rounded-full flex items-center gap-1 border border-amber-200">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    Rank #{leetcode.ranking.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Total Solved Overview Banner */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-5 rounded-xl mb-6 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold opacity-90">Total Problems Solved</div>
                  <div className="text-3xl font-extrabold mt-1">{leetcode.totalSolved}</div>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="space-y-4 mb-6">
                {/* Easy */}
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-1">
                    <span className="text-emerald-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                      Easy
                    </span>
                    <span className="text-gray-700">{leetcode.easySolved} Solved</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                      style={{ width: `${Math.min(easyPercentage, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-1">
                    <span className="text-amber-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                      Medium
                    </span>
                    <span className="text-gray-700">{leetcode.mediumSolved} Solved</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-700"
                      style={{ width: `${Math.min(mediumPercentage, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold mb-1">
                    <span className="text-rose-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                      Hard
                    </span>
                    <span className="text-gray-700">{leetcode.hardSolved} Solved</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full transition-all duration-700"
                      style={{ width: `${Math.min(hardPercentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Link Button */}
            <div className="pt-4 border-t border-gray-100">
              <a
                href={leetcode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <SiLeetcode className="w-5 h-5" />
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
