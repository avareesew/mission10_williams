using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace mission10_williams.Data
{
    public class Team
    {
        [Key]
        public required int TeamID { get; set; }

        public required string TeamName { get; set; }

    }
}