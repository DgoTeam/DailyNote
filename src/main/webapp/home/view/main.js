/**
 * 
 */
Ext.define('home.view.main', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.homeMain',
    
    frame: true,
    
    defaults: {
        bodyPadding: 10,
        autoScroll: true
    },
    items: [{
        title: '歡迎',
        closable: true,
        html : 'welcome DailyNote'
    }]
});