import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function FidelityProgram() {
  const { t } = useTranslation();

  
  const mockPointsData = [
    { name: "Sarah (Coiffure)", points: 120 },
    { name: "Lila (Massage)", points: 210 },
    { name: "Amel (Soins)", points: 370 },
  ];

  const mockHistoryData = [
    { provider: "Sarah - Coiffure", date: "15/12/2024", amount: "2400 DA", points: 10 },
    { provider: "Lila - Massage", date: "10/02/2024", amount: "3700 DA", points: 10 },
    { provider: "Amel - Soins", date: "23/07/2024", amount: "5000 DA", points: 10 },
  ];

  const [pointsData, setPointsData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setPointsData(mockPointsData);
      setHistoryData(mockHistoryData);
      setLoading(false);
    }, 1000); 
  }, []);

  const getButtonStyle = (points, threshold) => {
    return points >= threshold
      ? "bg-green-200 text-green-800 px-2 py-1 rounded"
      : "bg-red-200 text-red-800 px-2 py-1 rounded opacity-50 cursor-not-allowed";
  };

  if (loading) {
    return <div className="text-center mt-10">{t("loading_data")}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#956E6F] rounded-lg p-4 shadow-md text-center">
        <h1 className="text-2xl font-bold text-white">{t("fidelity_program")}</h1>
        <p className="text-sm text-white mt-2">{t("fidelity_program_description")}</p>
      </div>

      <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
  <h2 className="text-lg font-bold text-center">{t("your_discount_offers")}</h2>
  <p className="text-sm text-gray-700 mt-2 text-center">{t("discount_offers_description")}</p>
  <ul className="list-none text-gray-700 mt-4 text-center space-y-2">
    <li>{t("discount_10", { points: 100 })}</li>
    <li>{t("discount_30", { points: 200 })}</li>
    <li>{t("discount_50", { points: 300 })}</li>
  </ul>
  <p className="text-center text-red-500 font-bold mt-4">{t("earn_points_message")}</p>
</div>

      <div className="mt-6 bg-white rounded-lg p-4 shadow-md">
        <div className="flex justify-between font-bold text-lg">
          <h2>{t("your_points")}</h2>
          <h2>{t("your_offers")}</h2>
        </div>
        <hr className="my-2" />
        {pointsData.length > 0 ? (
          pointsData.map((data, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <p>
                {data.name} : {data.points} {t("points")}
              </p>
              <div className="flex space-x-2">
                <button className={getButtonStyle(data.points, 100)} disabled={data.points < 100}>
                  {t("discount_10_label")}
                </button>
                <button className={getButtonStyle(data.points, 200)} disabled={data.points < 200}>
                  {t("discount_30_label")}
                </button>
                <button className={getButtonStyle(data.points, 300)} disabled={data.points < 300}>
                  {t("discount_50_label")}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">{t("no_points_available")}</p>
        )}
      </div>

      <div className="mt-6 bg-[#956E6F] rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-bold text-white text-center">{t("history")}</h2>
        {historyData.length > 0 ? (
          historyData.map((history, index) => (
            <div key={index} className="mt-4 bg-white p-3 rounded border-l-8 border-l-[#614545] shadow">
              <p>
                <strong>{t("provider")}:</strong> {history.provider}
              </p>
              <p>
                <strong>{t("date")}:</strong> {history.date}
              </p>
              <p>
                <strong>{t("amount_paid")}:</strong> {history.amount}
              </p>
              <p>
                <strong>{t("points_earned")}:</strong> {history.points}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">{t("no_history_available")}</p>
        )}
      </div>
    </div>
  );
}

export default FidelityProgram;
