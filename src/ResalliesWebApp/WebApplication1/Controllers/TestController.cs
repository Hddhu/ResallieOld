using FireSharp;
using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace WebApplication1.Controllers
{
    public class TestController : Controller
    {
        IFirebaseConfig config = new FirebaseConfig
        {
            AuthSecret= "njDfOUuegHOOhAZlV8Sn6jgIrnnEEwUdD5Y1aN5l",
            BasePath= "https://resallies-default-rtdb.europe-west1.firebasedatabase.app/"
        };

        IFirebaseClient? client;

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]   
        public IActionResult Create()
        {
            return View();
        }


        [HttpPost]
        public IActionResult Create(Test test)
        {
            try
            {
                AddTestToDataBase(test);
                ModelState.AddModelError(String.Empty,"Added Succesfully");
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(String.Empty, ex.Message);
            }
            return View();
        }

        private void AddTestToDataBase(Test test)
        {
            client = new FirebaseClient(config);
            var data = test;
            test.Id = Count() + 1;  
            PushResponse response = client.Push("tests", data);
            //SetResponse setResponse = client.Set("test" + data.Id, data);

        }

        private int Count()
        {
            FirebaseResponse response = client.Get("tests");
            dynamic data = JsonConvert.DeserializeObject<dynamic>(response.Body);
            var list = new List<Test>();
            foreach (var item in data)
            {
                list.Add(JsonConvert.DeserializeObject<Test>(((JProperty)item).Value.ToString()));
            }
            return list.Count;
        }
    }
}
