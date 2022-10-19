
using FireSharp.Response;
using System;
using System.Collections.Generic;
using System.Web.Mvc;
using WebApp.Models;

namespace WebApp.Controllers
{
    public class AddressController : ResallieController
    {

        // POST: Address/Create
        [HttpPost]
        public override ActionResult Create(Dictionary<string, string> collection)
        {
            try
            {
                //AddAddres(new Address { 
                //    AddressName = collection.Get("AddressName")
                //});
                return RedirectToAction("Index");
            }
            catch(Exception ex)
            {
                ModelState.AddModelError( String.Empty, ex.Message );
                return View();
            }
        }

        private void AddAddres(Address address)
        {
            var data = address;
            PushResponse response = client.Push("Address/", data);
            data.Address_DBid = response.Result.name;
            SetResponse setResponse = client.Set("Address/" + data.Address_DBid, data);

        }

        // POST: Address/Edit/5
        [HttpPost]
        public new ActionResult Edit(int id, FormCollection collection)
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


        // POST: Address/Delete/5
        [HttpPost]
        public new ActionResult Delete(int id, FormCollection collection)
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
