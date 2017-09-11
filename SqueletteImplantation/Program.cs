using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace SqueletteImplantation
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .UseUrls("https://0.0.0.0:5000")
                .Build();

            host.Run();
        }
    }
}
