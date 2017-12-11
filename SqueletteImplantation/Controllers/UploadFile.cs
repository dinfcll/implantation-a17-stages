using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.IO;
using System;


namespace SqueletteImplantation.Controllers
{
    public class UploadFile: UploadService
    {

        public static string Chemin = "/CV/";

        public bool upload(IFormFile formFile, string chemin)
        {
            //string CheminApp = "/home/ubuntu/EPM/implantation-a17-epm/SqueletteImplantation/wwwroot";
           // string CheminApp = @"c:\Users\Romy Steve\Desktop\STAGE_dernier_etape\implantation-a17-stages\SqueletteImplantation\wwwroot\app";
             string CheminApp = "/home/ubuntu/implantation-a17-stages/SqueletteImplantation/wwwroot/app";
            try
            {
                using (FileStream upload = new FileStream(CheminApp + chemin, FileMode.Create))
                {
                   
                     formFile.CopyTo(upload);
                }
                return true;
            }
            catch (IOException)
            {
                return false;
            }
        }


        public bool deletefile(string destinationFile)
        {
            bool retour = false;
            try
            {
                if (File.Exists(destinationFile))
                {
                    File.Delete(destinationFile);
                    retour = true;
                }
            }
            catch (IOException)
            {
                retour = false;
            }
            return retour;
        }















    }
}
