provider "aws" {
  region     = "sa-east-1"
  access_key = "AKIASXBJDRSRYPYETEWM"
  secret_key = "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"
}

resource "aws_instance" "InstanciaCloudDevopsTeam3" {
  
    ami = "ami-06e4dfa661cfb29b2"
    instance_type = "t2.micro"
    key_name = "terraform-key"
    
    tags = {
    
    name = "InstanciaCloudDevopsTeam3"
    Year = "2022"
    OS = "Windows Server 2022"
    Carrer= "BootcampDevOps"
    Institute= "EducacionIT"
    Environment = "Development"
     
    }

    vpc_security_group_ids = [aws_security_group.SG1.id]
  
  }

resource "aws_security_group" "SG1"  {

    name = "SG1" 
    description = "Acceso a RDP e Internet"

    ingress {

    from_port = 3389
    to_port = 3389
    protocol = "TCP"
    cidr_blocks =  ["0.0.0.0/0"] 
        
    }

    ingress {

    from_port = 80
    to_port = 80
    protocol = "TCP"
    cidr_blocks = ["0.0.0.0/0"]
        
    }

    egress {

    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
        
    }

}

resource "aws_volume_attachment" "ebs_att" {
  
    device_name = "/dev/sdh"
    volume_id   = aws_ebs_volume.esc.id
    instance_id = aws_instance.InstanciaCloudDevopsTeam3.id
}
  
resource "aws_ebs_volume" "esc" {
    
    availability_zone = "sa-east-1a"
    size= 30

    tags = {

      Name = "Esclavo-ebs"

    }
 
  }
