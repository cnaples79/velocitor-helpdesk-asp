using velocitor_helpdesk_asp.Models;
using Microsoft.AspNetCore.Mvc;

namespace velocitor_helpdesk_asp.Components
{
    public class SidebarItemViewComponent : ViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync(
            string linkText,
            string iconClass,
            string aspArea,
            string aspController,
            string aspAction
        )
        {
            var model = new SidebarItemModel
            {
                LinkText = linkText,
                IconClass = iconClass,
                AspArea = aspArea,
                AspController = aspController,
                AspAction = aspAction
            };
            return View(model); // Pass the model to the view
        }
    }
}