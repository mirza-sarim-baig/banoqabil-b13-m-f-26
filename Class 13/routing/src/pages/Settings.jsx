import React from "react";
import { User, Bell, Lock, Globe, Moon, Save } from "lucide-react";

const Settings = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

        <p className="text-gray-500 mt-1">
          Manage your dashboard preferences and account settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-5 h-fit">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-blue-50 text-blue-600 font-medium">
              <User size={20} />
              Profile Settings
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-100 transition">
              <Bell size={20} />
              Notifications
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-100 transition">
              <Lock size={20} />
              Security
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-100 transition">
              <Globe size={20} />
              Language
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-100 transition">
              <Moon size={20} />
              Appearance
            </button>
          </div>
        </div>

        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">
                JD
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  John Doe
                </h2>

                <p className="text-gray-500">Administrator</p>
              </div>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  defaultValue="john@gmail.com"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  defaultValue="+1 234 567 890"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Role
                </label>

                <input
                  type="text"
                  defaultValue="Admin"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition">
              <Save size={18} />
              Save Changes
            </button>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Preferences
            </h2>

            <div className="space-y-5">
              {/* Notifications */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">
                    Email Notifications
                  </h3>

                  <p className="text-sm text-gray-500">
                    Receive updates via email
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />

                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition"></div>

                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Dark Mode</h3>

                  <p className="text-sm text-gray-500">
                    Enable dark appearance
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />

                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition"></div>

                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>

              {/* Auto Backup */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">Auto Backup</h3>

                  <p className="text-sm text-gray-500">
                    Backup dashboard data automatically
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />

                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition"></div>

                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
