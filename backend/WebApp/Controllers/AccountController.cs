using System.Web.Mvc;
using WebApp.Models;
using System.Collections.Generic;
using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Linq;

namespace WebApp.Controllers
{
    public class AccountController : ResallieController
    {
        public List<Account> Collection;

        public AccountController()
        {            
            DatabaseReference = "Accounts/";
            //UpdateCollection();
        }

        public override void UpdateCollection()
        {
            if(client.Get("Accounts").Body.Equals("null"))
            { 
                return;
            }

            var list = new List<Account>();
            var data = JsonConvert.DeserializeObject<JObject>(client.Get("Accounts").Body);

            foreach(JProperty item in data.Properties())
            {
                foreach (JProperty prop in ((JObject)item.Value).Properties())
                { 
                    list.Add(JsonConvert.DeserializeObject<Account>(prop.Value.ToString()));
                }
            }

            Collection = list;
        }

        private void GetPropertiesFromJObject(Func<IEnumerable<JProperty>> properties)
        {

        }

        [HttpPost]
        public ActionResult Login(string email, string password)
        {
            try
            {
                if(!FindAccountByUsername(email, out List<Account> accounts))
                {
                    
                }
                
                if(!AccountMatchesPassword(accounts))
                {

                }

                //token...
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        private bool AccountMatchesPassword(List<Account> accounts)
        {
           return accounts.Any(x => x.Password.Equals(StringComparer.CurrentCultureIgnoreCase));
        }

        private bool FindAccountByUsername(string email, out List<Account> result)
        {
            UpdateCollection();
            result = Collection.Where(x=> x.Email == email).ToList();
            
            return result.Count > 0 ? true : false;
        }

        public bool FindAccountByUserId(int id, out Account account)
        {
            UpdateCollection();
            account = Collection.Where(a => a.Account_id.Equals(""+id, StringComparison.OrdinalIgnoreCase)).FirstOrDefault();
            return account != null;
        }

        //// GET: Accounts/Create
        //public ActionResult Create()
        //{
        //    return View();
        //}

        //// POST: Accounts/Create
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for 
        //// more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<ActionResult> Create([Bind(Include = "Account_id,Email,Password")] Account account)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        RedirectToRoute("");
        //    }

        //    return View(account);
        //}

        // GET: Accounts/Edit/5
        //    public async Task<ActionResult> Edit(int? id)
        //    {
        //        if (id == null)
        //        {
        //            return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //        }
        //        Account account;
        //        if (account == null)
        //        {
        //            return HttpNotFound();
        //        }
        //        return View(account);
        //    }

        //    // POST: Accounts/Edit/5
        //    // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        //    // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        //    [HttpPost]
        //    [ValidateAntiForgeryToken]
        //    public async Task<ActionResult> Edit([Bind(Include = "Account_id,Email,Password")] Account account)
        //    {
        //        if (ModelState.IsValid)
        //        {

        //            return RedirectToAction("Index");
        //        }
        //        return View(account);
        //    }

        //    // GET: Accounts/Delete/5
        //    public async Task<ActionResult> Delete(int? id)
        //    {
        //        if (id == null)
        //        {
        //            return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //        }
        //        Account account;
        //        if (account == null)
        //        {
        //            return HttpNotFound();
        //        }
        //        return View(account);
        //    }

        //    // POST: Accounts/Delete/5
        //    [HttpPost, ActionName("Delete")]
        //    [ValidateAntiForgeryToken]
        //    public async Task<ActionResult> DeleteConfirmed(int id)
        //    {
        //        Account account;
        //        return RedirectToAction("Index");
        //    }

        //    protected override void Dispose(bool disposing)
        //    {
        //        if (disposing)
        //        {
        //        }
        //        base.Dispose(disposing);
        //    }
    }
}
