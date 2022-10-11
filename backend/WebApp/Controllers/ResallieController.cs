using FireSharp.Config;
using FireSharp.Interfaces;
using FireSharp.Response;
using System;
using System.Net;
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
        public virtual ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here
                AddToFireBase(collection);
                return Redirect("~/");
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(String.Empty, ex.Message);
                return View();
            }
        }

        private void AddToFireBase(FormCollection collection)
        {
            if (CheckDataFromControllerIsModelType(collection))
                 client.Push(DatabaseReference, collection); 
        }

        private bool CheckDataFromControllerIsModelType(FormCollection collection)
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
    }
}