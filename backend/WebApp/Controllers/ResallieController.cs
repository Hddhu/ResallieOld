using FireSharp.Config;
using FireSharp.Interfaces;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    public abstract class ResallieController : Controller
    {
        protected string DatabaseReference { get; set; }
        public ResallieController()
            : base()
        {
            UpdateCollection();
        }

        public static readonly FirebaseConfig firebaseConfig = new FirebaseConfig
        {
            AuthSecret = "njDfOUuegHOOhAZlV8Sn6jgIrnnEEwUdD5Y1aN5l",
            BasePath = "https://resallies-default-rtdb.europe-west1.firebasedatabase.app/"
        };
        
        public IFirebaseClient client= new FireSharp.FirebaseClient(firebaseConfig);

        // GET: Address
        public ActionResult Index()
        {
            return View();
        }

        // GET: Address/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Address/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Address/Create
        [HttpPost]
        public virtual ActionResult Create(Dictionary<string,string> collection)
        {
            try
            {
                // TODO: Add insert logic here
                AddToFireBase(collection);
                UpdateCollection();
                return Redirect("~/");
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(String.Empty, ex.Message);
                return View();
            }
        }

        private void AddToFireBase(Dictionary<string, string> collection)
        {
            JObject obj = new JObject();   
            foreach (var key in collection.Keys)
            {
                obj.Add(new JProperty(key, collection[key]));
            }


            if (CheckDataFromControllerIsModelType(collection))
                 client.Push(DatabaseReference + collection[collection.Keys.Where(x => x.EndsWith("_id")).First()], obj); 
                             //client.Push(DatabaseReference + collection[collection.Keys.Where(x => x.EndsWith("_id")).First()], collection); 

        }

        private bool CheckDataFromControllerIsModelType(Dictionary<string, string> collection)
        {
            return true;
        }

        // GET: Address/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Address/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Address/Delete/5
        public ActionResult Delete(int id)
        {
            client.Delete(DatabaseReference + id);
            return View();
        }

        // POST: Address/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        public virtual void UpdateCollection()
        {
            var list = new List<Model>();
            var data = JsonConvert.DeserializeObject<JObject>(client.Get("Accounts").Body);

            foreach (var item in data.Properties())
            {
                foreach (var prop in ((JObject)item.Value).Properties())
                {

                }
            }
        }
        public virtual dynamic Find()
        {
            throw new NotImplementedException();
        }
    }
}