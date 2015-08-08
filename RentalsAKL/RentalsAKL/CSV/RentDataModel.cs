using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentalsAKL.CSV
{
    public class RentDataModel
    {

        public string region { get; set; }
        public string marketRentArea { get; set; }
        public string propertyType { get; set; }
        public string bedrooms { get; set; }
        public float averageRentPrice { get; set; }
    }
}