namespace mission10_williams.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private Mission10Context _mission10Context;
        public EFBowlerRepository(Mission10Context temp)
        {
            _mission10Context = temp;
        }
        public IEnumerable<Bowler> Bowlers => _mission10Context.Bowlers;
        public IEnumerable<Team> Teams => _mission10Context.Teams;

        public Team GetTeamById(int? teamID)
        {
            return _mission10Context.Teams.Find(teamID);
        }
    }
}
