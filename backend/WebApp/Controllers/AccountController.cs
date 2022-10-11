using System.Threading.Tasks;
using System.Net;
using System.Web.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class AccountController : ResallieController
    {
        public AccountController()
        {
            DatabaseReference = "Acounts/";
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
