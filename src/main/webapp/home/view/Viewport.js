/**
 * home page Viewport
 */
Ext.define('home.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    requires: [ 'home.view.menu','home.view.main' ],
    
    layout: 'border',
    
    items: [
        {
            region : 'north',
        	xtype: 'homeMenu'
        },
        {
        	region : 'center',
        	xtype: 'homeMain'
        }
    ]
});
