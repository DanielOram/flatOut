using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace RentalsAKL.CSV
{
    public class CSVHandler
    {
        //description of the RentDataModel attributes
        //public string TA { get; set; }
        //public string marketRentArea { get; set; }
        //public string propertyType { get; set; }
        //public string bedrooms { get; set; }
        //public float averageRentPrice { get; set; }
        

        public void CSVHandler(){
            var reader = new StreamReader(File.OpenRead(@"~/CSV/detailed-mean-rents-total.csv"));
            List<RentDataModel> listData = new List<RentDataModel>();

            while (!reader.EndOfStream)
            {
                //init rentdata object
                var rentdata = new RentDataModel();

                //read line from csv
                var line = reader.ReadLine();
                var values = line.Split(',');

                //set values of rentdata object
                rentdata.region = values[0];
                rentdata.marketRentArea = values[1];
                rentdata.propertyType = values[2];
                rentdata.averageRentPrice = float.Parse(values.Last());

                //add rentdata object to list
                listData.Add(rentdata);
            }
        }
        }
}