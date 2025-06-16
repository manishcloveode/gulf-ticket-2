export default function HowItWorks() {
    const games = [
        { name: "Lucky 1", grave: "RM 50,000", drawers: "RM 80,000", daily: "Daily", drawDraw: "Daily" },
        { name: "Rush 3", grave: "RM 80,000", drawers: "RM 1,150,000", daily: "Daily", drawDraw: "Daily" },
        { name: "Dream 5", grave: "RM 1,75,000", drawers: "RM 5,75,000", daily: "Daily", drawDraw: "Daily" },
        { name: "Magic 5", grave: "RM 5,750,000", drawers: "RM 5,750,000", daily: "Daily", drawDraw: "Daily" },
        { name: "Super 5", grave: "RM 15,000,000", drawers: "RM 115,000,000", daily: "Daily", drawDraw: "Daily" },
    ]

    return (
        <section className="bg-[#191970]">
            <div id="live-draw" className="container mx-auto px-4 py-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12"> PRIZE TABLE SECTION</h2>

                <div className="bg-blue-800/30 backdrop-blur-sm rounded-2xl overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-4 p-6 bg-blue-700/50 text-white font-semibold text-center">
                        <div>Game</div>
                        <div>Grave</div>
                        <div>Drawers</div>
                        <div>Daily</div>
                        <div>Draw Draw</div>
                    </div>

                    {/* Table Rows */}
                    {games.map((game, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-5 gap-4 p-6 text-white border-b border-blue-600/50 text-center ${index % 2 === 0 ? "bg-blue-800/20" : "bg-blue-800/40"}`}
                        >
                            <div className="font-semibold">{game.name}</div>
                            <div className="text-white font-semibold">{game.grave}</div>
                            <div className="text-white font-semibold">{game.drawers}</div>
                            <div>{game.daily}</div>
                            <div>{game.drawDraw}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
