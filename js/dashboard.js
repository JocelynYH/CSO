var newCardContainerTemplate = _.template('<div class="card-container">' + 
'<div class="content-container" class="container">' + 
'</div>' + 
'</div>' + 
'<style>' + 
'.card-container {' + 
'box-sizing: border-box;' + 
'box-shadow: 1px 1px 4px #ccc;' + 
'width: 90%;' + 
'margin: auto;' + 
'min-height: 25rem;' + 
'text-align: left;' + 
'padding: 1rem;' + 
'}' + 
'</style>');
var newCardContainerHtml = newCardContainerTemplate();
$('#main-content').append(newCardContainerHtml);