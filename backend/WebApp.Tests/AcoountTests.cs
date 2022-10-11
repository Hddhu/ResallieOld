using NUnit.Framework;
using FireSharp.Config;
using FireSharp.Interfaces;
using WebApp.Controllers;
using System.Web.Mvc;

namespace WebAppTests
{
    [TestFixture]
    public class AcoountTests
    {
        [SetUp]
        public void Init()
        {
            FirebaseConfig firebaseConfig = new FirebaseConfig
            {
                AuthSecret = "njDfOUuegHOOhAZlV8Sn6jgIrnnEEwUdD5Y1aN5l",
                BasePath = "https://resallies-default-rtdb.europe-west1.firebasedatabase.app/"
            };

            IFirebaseClient client = new FireSharp.FirebaseClient(firebaseConfig);
        }
        [Test]
        public void AddUserTest()
        {
            var a = new object();
            var testObject = new FormCollection();
            testObject.Add("Account_id", "192");
            testObject.Add("Email", "test123@test.com");
            testObject.Add("Pasword", "t3sT123");
            var testController = new AccountController();
            testController.Create(testObject);
        }

        [Test]
        public void CheckUserName()
        {
        }
    }
}
