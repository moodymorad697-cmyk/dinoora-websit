"use client";

import { useState } from "react";
import Link from "next/link";

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setTrackingResult({
        status: "In Transit",
        location: "Shenzhen, China",
        estimatedDelivery: "2024-05-15",
        origin: "Shenzhen, China",
        destination: "Riyadh, Saudi Arabia",
        shippingMethod: "Air Freight",
        weight: "500 kg",
        progress: 65,
        updates: [
          {
            date: "2024-05-01",
            time: "14:30",
            location: "Shenzhen, China",
            status: "Departed from origin",
            description: "Shipment has departed from Shenzhen warehouse"
          },
          {
            date: "2024-05-02",
            time: "09:15",
            location: "Shenzhen Airport",
            status: "Customs clearance",
            description: "Export customs clearance completed"
          },
          {
            date: "2024-05-03",
            time: "16:45",
            location: "In Transit",
            status: "In flight",
            description: "Shipment is currently in transit to destination"
          }
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-block text-blue-300 hover:text-white mb-6">
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Track Your Shipment
            </h1>
            <p className="text-xl text-gray-300">
              Enter your tracking number to get real-time updates on your shipment status
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-24 bg-gradient-to-b from-background to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!trackingResult ? (
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Enter Tracking Number
                </h2>

                <form onSubmit={handleTrack}>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your tracking number (e.g., CTP-2024-001234)"
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg disabled:opacity-50"
                    >
                      {isLoading ? "Tracking..." : "Track"}
                    </button>
                  </div>
                </form>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">📋 Tracking Number Format</h3>
                  <p className="text-blue-800 text-sm">
                    Your tracking number should be in the format: CTP-YYYY-XXXXXX
                    <br />
                    Example: CTP-2024-001234
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Tracking Result */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Tracking: {trackingNumber}
                      </h2>
                      <p className="text-gray-600">
                        Status: <span className="font-semibold text-blue-600">{trackingResult.status}</span>
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setTrackingResult(null);
                        setTrackingNumber("");
                      }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Track Another
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{trackingResult.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
                        style={{ width: `${trackingResult.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Shipment Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Origin</h3>
                      <p className="text-gray-600">{trackingResult.origin}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Destination</h3>
                      <p className="text-gray-600">{trackingResult.destination}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Shipping Method</h3>
                      <p className="text-gray-600">{trackingResult.shippingMethod}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Weight</h3>
                      <p className="text-gray-600">{trackingResult.weight}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Current Location</h3>
                      <p className="text-gray-600">{trackingResult.location}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Estimated Delivery</h3>
                      <p className="text-gray-600">{trackingResult.estimatedDelivery}</p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Shipment Timeline</h3>
                    <div className="space-y-4">
                      {trackingResult.updates.map((update: any, index: number) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full" />
                            {index < trackingResult.updates.length - 1 && (
                              <div className="w-0.5 h-full bg-gray-300" />
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-gray-900">{update.status}</span>
                              <span className="text-sm text-gray-500">
                                {update.date} at {update.time}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm">{update.location}</p>
                            <p className="text-gray-500 text-sm">{update.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
