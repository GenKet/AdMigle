# Generated by Django 4.2.7 on 2023-11-16 18:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
                ('descriptions_client', models.CharField(max_length=200, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='adwdata',
            name='user_id',
        ),
        migrations.RemoveField(
            model_name='users',
            name='status',
        ),
        migrations.AlterField(
            model_name='users',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='users',
            name='password',
            field=models.CharField(max_length=128, verbose_name='password'),
        ),
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True)),
                ('descriptions_client', models.CharField(max_length=200, null=True)),
                ('project_type', models.CharField(max_length=200, null=True)),
                ('account_id', models.CharField(max_length=200, null=True)),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.client')),
            ],
        ),
        migrations.CreateModel(
            name='FbData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fb_client_id', models.CharField(max_length=200, null=True)),
                ('fb_client_secret', models.CharField(max_length=200, null=True)),
                ('client', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='mainapp.client')),
            ],
        ),
        migrations.AddField(
            model_name='client',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='adwdata',
            name='client',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='mainapp.client'),
        ),
    ]
