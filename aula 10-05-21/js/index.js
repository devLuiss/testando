$.support.cors=true

$(document).ready(
    function(){
        $.ajax({
            type:"GET",
            url:"http://192.168.10.85:9000/users",
            success: function(data){
                $.each(data,function(i,user){
                    console.log(user);
                    $('#tabela_user').append(
                        "<tr>"+
                        "<td>"+i+ "</td>"+
                        "<td>"+user.guuid+"</td>"+
                        "<td>"+user.name+ "</td>"+
                        "<td>"+user.cpf+ "</td>"+
                        "<td>"+user.cargo+ "</td>"+
                        
                    
                        "<?tr>"

                    )
                })
            }
        })
    }
)