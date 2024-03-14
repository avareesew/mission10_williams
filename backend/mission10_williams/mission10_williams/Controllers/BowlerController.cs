using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission10_williams.Data;

namespace mission10_williams.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;
        public BowlerController(IBowlerRepository temp) {
            _bowlerRepository = temp;
        }

        public IEnumerable<Bowler> Get()
        {

            var BowlerData = _bowlerRepository.Bowlers;
            foreach (var bowler in BowlerData)
            {
                bowler.Team = _bowlerRepository.GetTeamById(bowler.TeamID);
            }

            var filteredBowlerData = BowlerData
                .Where(b => b.Team != null && (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .ToList();

            return filteredBowlerData;
        }
    }
}
