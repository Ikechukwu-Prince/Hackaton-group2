

function sideNavigator(){
  
 



    const home = document.getElementById('home')
    const dashboard = document.getElementById('dashboard')
    const notification = document.getElementById('notification')
    const comment = document.getElementById('comment')
    
    const register = document.getElementById('register')
    const setting = document.getElementById('setting')
    const account = document.getElementById('account')
    const logout = document.getElementById('logout')


    const homeSection = document.getElementById('homeSection')
    const dashboardSection = document.getElementById('dashboardSection')
    const notificationSection = document.getElementById('notificationSection')
    const commentSection = document.getElementById('commentSection')
   
    const registerSection = document.getElementById('registerSection')
    const settingSection = document.getElementById('settingSection')
    const accountSection = document.getElementById('accountSection')
    const logoutSection = document.getElementById('logoutSection')

home.addEventListener('click', ()=> {
homeSection.style.display = 'block'
dashboardSection.style.display = 'none'
notificationSection.style.display = 'none'
commentSection.style.display = 'none'

registerSection.style.display = 'none'
settingSection.style.display = 'none'
accountSection.style.display = 'none'
logoutSection.style.display = 'none'

});

dashboard.addEventListener('click', ()=> {

    dashboardSection.style.display = 'block'
    homeSection.style.display = 'none'
    notificationSection.style.display = 'none'
    commentSection.style.display = 'none'
    
    registerSection.style.display = 'none'
    settingSection.style.display = 'none'
    accountSection.style.display = 'none'
    logoutSection.style.display = 'none'
    
    });

    notification.addEventListener('click', ()=> {

        notificationSection.style.display = 'block'
        dashboardSection.style.display = 'none'
        homeSection.style.display = 'none'
        commentSection.style.display = 'none'
        
        registerSection.style.display = 'none'
        settingSection.style.display = 'none'
        accountSection.style.display = 'none'
        logoutSection.style.display = 'none'
        
        });


        comment.addEventListener('click', () => {

            commentSection.style.display = 'block'
            dashboardSection.style.display = 'none'
            notificationSection.style.display = 'none'
            homeSection.style.display = 'none'
            
            registerSection.style.display = 'none'
            settingSection.style.display = 'none'
            accountSection.style.display = 'none'
            logoutSection.style.display = 'none'
            
            });

           

                register.addEventListener('click', ()=> {

                    registerSection.style.display = 'block'
                    dashboardSection.style.display = 'none'
                    notificationSection.style.display = 'none'
                    commentSection.style.display = 'none'
                    
                    homeSection.style.display = 'none'
                    settingSection.style.display = 'none'
                    accountSection.style.display = 'none'
                    logoutSection.style.display = 'none'
                    
                    });


                    setting.addEventListener('click', ()=> {

                        settingSection.style.display = 'block'
                        dashboardSection.style.display = 'none'
                        notificationSection.style.display = 'none'
                        commentSection.style.display = 'none'
                        
                        registerSection.style.display = 'none'
                        homeSection.style.display = 'none'
                        accountSection.style.display = 'none'
                        logoutSection.style.display = 'none'
                        
                        });

                        account.addEventListener('click', ()=> {

                            accountSection.style.display = 'block'
                            dashboardSection.style.display = 'none'
                            notificationSection.style.display = 'none'
                            commentSection.style.display = 'none'
                            
                            registerSection.style.display = 'none'
                            settingSection.style.display = 'none'
                            homeSection.style.display = 'none'
                            logoutSection.style.display = 'none'
                            
                            });

                            logout.addEventListener('click', ()=> {

                                logoutSection.style.display = 'block'
                        dashboardSection.style.display = 'none'
                        notificationSection.style.display = 'none'
                        commentSection.style.display = 'none'
                        
                        registerSection.style.display = 'none'
                        settingSection.style.display = 'none'
                        accountSection.style.display = 'none'
                        homeSection.style.display = 'none'
                        
                        })


}
sideNavigator()



function mobileSideNavigator(){

    const mobileHome = document.getElementById('mobileHome')
    const mobileDashboard = document.getElementById('mobileDashboard')
    const mobileNotification = document.getElementById('mobileNotification')
    const mobileComment = document.getElementById('mobileComment')
    
    const mobileRegister = document.getElementById('mobileRegister')
    const mobileSetting = document.getElementById('mobileSetting')
    const mobileAccount = document.getElementById('mobileAccount')
    const mobileLogout = document.getElementById('mobileLogout')


    const homeSection = document.getElementById('homeSection')
    const dashboardSection = document.getElementById('dashboardSection')
    const notificationSection = document.getElementById('notificationSection')
    const commentSection = document.getElementById('commentSection')
    
    const registerSection = document.getElementById('registerSection')
    const settingSection = document.getElementById('settingSection')
    const accountSection = document.getElementById('accountSection')
    const logoutSection = document.getElementById('logoutSection')

mobileHome.addEventListener('click', ()=> {
homeSection.style.display = 'block'
dashboardSection.style.display = 'none'
notificationSection.style.display = 'none'
commentSection.style.display = 'none'

registerSection.style.display = 'none'
settingSection.style.display = 'none'
accountSection.style.display = 'none'
logoutSection.style.display = 'none'

});

mobileDashboard.addEventListener('click', ()=> {

    dashboardSection.style.display = 'block'
    homeSection.style.display = 'none'
    notificationSection.style.display = 'none'
    commentSection.style.display = 'none'
    
    registerSection.style.display = 'none'
    settingSection.style.display = 'none'
    accountSection.style.display = 'none'
    logoutSection.style.display = 'none'
    
    });

    mobileNotification.addEventListener('click', ()=> {

        notificationSection.style.display = 'block'
        dashboardSection.style.display = 'none'
        homeSection.style.display = 'none'
        commentSection.style.display = 'none'
        
        registerSection.style.display = 'none'
        settingSection.style.display = 'none'
        accountSection.style.display = 'none'
        logoutSection.style.display = 'none'
        
        });


        mobileComment.addEventListener('click', () => {

            commentSection.style.display = 'block'
            dashboardSection.style.display = 'none'
            notificationSection.style.display = 'none'
            homeSection.style.display = 'none'
            
            registerSection.style.display = 'none'
            settingSection.style.display = 'none'
            accountSection.style.display = 'none'
            logoutSection.style.display = 'none'
            
            });

            


                mobileRegister.addEventListener('click', ()=> {

                    registerSection.style.display = 'block'
                    dashboardSection.style.display = 'none'
                    notificationSection.style.display = 'none'
                    commentSection.style.display = 'none'
                    
                    homeSection.style.display = 'none'
                    settingSection.style.display = 'none'
                    accountSection.style.display = 'none'
                    logoutSection.style.display = 'none'
                    
                    });


                    mobileSetting.addEventListener('click', ()=> {

                        settingSection.style.display = 'block'
                        dashboardSection.style.display = 'none'
                        notificationSection.style.display = 'none'
                        commentSection.style.display = 'none'
                        
                        registerSection.style.display = 'none'
                        homeSection.style.display = 'none'
                        accountSection.style.display = 'none'
                        logoutSection.style.display = 'none'
                        
                        });

                        mobileAccount.addEventListener('click', ()=> {

                            accountSection.style.display = 'block'
                            dashboardSection.style.display = 'none'
                            notificationSection.style.display = 'none'
                            commentSection.style.display = 'none'
                            
                            registerSection.style.display = 'none'
                            settingSection.style.display = 'none'
                            homeSection.style.display = 'none'
                            logoutSection.style.display = 'none'
                            
                            });

                            mobileLogout.addEventListener('click', ()=> {

                                logoutSection.style.display = 'block'
                        dashboardSection.style.display = 'none'
                        notificationSection.style.display = 'none'
                        commentSection.style.display = 'none'
                        
                        registerSection.style.display = 'none'
                        settingSection.style.display = 'none'
                        accountSection.style.display = 'none'
                        homeSection.style.display = 'none'
                        
                        })
}
mobileSideNavigator()



document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show feedback message
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = "Registration and drug details submitted successfully!";
    feedbackMessage.style.display = 'block';

    // Optionally reset the form
    document.getElementById('registration-form').reset();
});





document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate inputs
    const manufacturerName = document.getElementById('manufacturer-name').value.trim();
    const qualityControl = document.getElementById('quality-control').value;
    const reportFrequency = document.getElementById('report-frequency').value;
    const timezone = document.getElementById('timezone').value;

    if (!manufacturerName || !qualityControl || !reportFrequency || !timezone) {
        alert("Please fill in all required fields.");
        return;
    }

    // Show feedback message
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.textContent = "Settings saved successfully!";
    feedbackMessage.style.display = 'block';

    // Optionally, clear the form or reset inputs
    document.getElementById('settings-form').reset();
});

document.getElementById('add-tag').addEventListener('click', function() {
    const newTagInput = document.getElementById('new-tag');
    const newTagValue = newTagInput.value.trim();
    if (newTagValue) {
        const tagsContainer = document.getElementById('tags-container');
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = newTagValue;
        tagsContainer.appendChild(tagElement);
        newTagInput.value = '';
    } else {
        alert("Please enter a tag.");
    }
});







function panelToggler(){
    const menu = document.getElementById('menu')

    menu.addEventListener('click', () => {
        if(screen.availWidth >= 700){
        const sidePanel = document.getElementById('sidePanel')

        sidePanel.classList.toggle("hidden")

        }else{
        const mobilePanel = document.getElementById('mobilePanel')

    mobilePanel.classList.toggle("Reveal")
}
    })

    
}
panelToggler()




function linkMenuBtn(){
    const linkMenu = document.getElementById('linkMenu');

    linkMenu.classList.toggle("linkMenuToggle")
}



function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.maxHeight) {
        section.style.maxHeight = null;
    } else {
        section.style.maxHeight = section.scrollHeight + "px";
    }
}






























